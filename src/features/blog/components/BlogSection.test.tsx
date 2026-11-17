import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Blog from "@/pages/Blog";
import Navbar from "@/components/layout/Navbar";
import { blogPosts } from "@/features/blog/data/posts";

vi.mock("@/components/AnimatedSection", () => ({
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

beforeEach(() => { vi.spyOn(window, "scrollTo").mockImplementation(() => {}); });
afterEach(() => { cleanup(); vi.restoreAllMocks(); });

const renderBlog = (url: string) => render(
  <MemoryRouter initialEntries={[url]}><Blog /></MemoryRouter>,
);

describe("blog navigation", () => {
  it("marks Blog active only on the blog page", () => {
    const { unmount } = render(<MemoryRouter initialEntries={["/"]}><Navbar /></MemoryRouter>);
    expect(screen.getByRole("link", { name: "Blog" })).not.toHaveAttribute("aria-current");
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("aria-current", "location");
    unmount();
    renderBlog("/blog");
    expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Home" })).not.toHaveAttribute("aria-current");
  });

  it("highlights Blog while scrolling through pinned posts, then Education", () => {
    const pinned = document.createElement("section");
    pinned.id = "blog";
    const education = document.createElement("section");
    education.id = "education";
    document.body.append(pinned, education);
    let educationTop = 800;
    vi.spyOn(pinned, "getBoundingClientRect").mockImplementation(() => ({ top: 100 } as DOMRect));
    vi.spyOn(education, "getBoundingClientRect").mockImplementation(() => ({ top: educationTop } as DOMRect));
    const { unmount } = render(<MemoryRouter initialEntries={["/"]}><Navbar /></MemoryRouter>);
    expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute("aria-current");
    expect(screen.getByRole("link", { name: "Home" })).not.toHaveAttribute("aria-current");
    educationTop = 100;
    fireEvent.scroll(window);
    expect(screen.getByRole("link", { name: "Education" })).toHaveAttribute("aria-current");
    expect(screen.getByRole("link", { name: "Blog" })).not.toHaveAttribute("aria-current");
    unmount();
    pinned.remove();
    education.remove();
  });

  it("lets readers recover from an empty search", () => {
    renderBlog("/blog");
    fireEvent.change(screen.getByRole("textbox", { name: "Search posts" }), { target: { value: "no-such-article" } });
    expect(screen.getByRole("status")).toHaveTextContent("0 posts found");
    fireEvent.click(screen.getByRole("button", { name: "Clear filters" }));
    expect(screen.getByRole("textbox", { name: "Search posts" })).toHaveValue("");
    expect(screen.getByRole("status")).toHaveTextContent(`${blogPosts.length} posts`);
  });

  it("shows the article directly with one return link and returns to the list", async () => {
    const post = blogPosts[0];
    renderBlog(`/blog?post=${post.id}`);
    expect(screen.getByRole("heading", { level: 1, name: post.title })).toBeInTheDocument();
    expect(screen.queryByText("Back to portfolio")).not.toBeInTheDocument();
    expect(screen.queryByPlaceholderText("Search posts...")).not.toBeInTheDocument();
    const returnLinks = screen.getAllByRole("link", { name: "Back to blog" });
    expect(returnLinks).toHaveLength(1);
    expect(returnLinks[0]).toHaveAttribute("href", "/blog");
    fireEvent.click(returnLinks[0]);
    await waitFor(() => expect(screen.getByRole("heading", { level: 1, name: /Blog\s*\./ })).toBeInTheDocument());
    expect(screen.getByRole("textbox", { name: "Search posts" })).toBeInTheDocument();
  });

  it("opens articles through normal links and filters the list", async () => {
    renderBlog("/blog");
    const post = blogPosts[0];
    fireEvent.change(screen.getByRole("textbox", { name: "Search posts" }), { target: { value: post.title } });
    const articleLink = screen.getByRole("link", { name: new RegExp(post.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")) });
    expect(articleLink).toHaveAttribute("href", `/blog?post=${post.id}`);
    fireEvent.click(articleLink);
    await waitFor(() => expect(screen.getByRole("heading", { level: 1, name: post.title })).toBeInTheDocument());
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "instant" });
  });
});

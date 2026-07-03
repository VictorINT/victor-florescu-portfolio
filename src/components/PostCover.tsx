import { BlogPost } from "@/data/blogPosts";

const accentMap: Record<string, string> = {
  amber: "from-amber-500/20 via-amber-500/5 to-transparent text-amber-300/90",
  blue: "from-sky-500/20 via-sky-500/5 to-transparent text-sky-300/90",
  green: "from-emerald-500/20 via-emerald-500/5 to-transparent text-emerald-300/90",
  red: "from-rose-500/20 via-rose-500/5 to-transparent text-rose-300/90",
  violet: "from-violet-500/20 via-violet-500/5 to-transparent text-violet-300/90",
};

interface Props {
  post: BlogPost;
  className?: string;
}

/** Renders a real photo when present, otherwise a typographic cover. */
const PostCover = ({ post, className = "" }: Props) => {
  if (post.thumbnail) {
    return (
      <img
        src={post.thumbnail}
        alt={post.title}
        className={`w-full object-cover ${className}`}
      />
    );
  }

  const accent = post.cover?.accent ?? "amber";
  const label = post.cover?.label ?? post.category;
  const tone = accentMap[accent];

  return (
    <div
      className={`relative w-full overflow-hidden bg-[hsl(220_15%_7%)] ${className}`}
      aria-label={post.title}
    >
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100% / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.6) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* accent wash */}
      <div className={`absolute inset-0 bg-gradient-to-br ${tone.split(" ").slice(0, 3).join(" ")}`} />
      {/* label */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <span
          className={`font-mono text-base sm:text-lg tracking-tight ${tone.split(" ").pop()}`}
        >
          {label}
        </span>
      </div>
      {/* corner tick */}
      <div className="absolute top-3 left-3 font-mono text-[10px] text-muted-foreground/70">
        /{post.category}
      </div>
      <div className="absolute bottom-3 right-3 font-mono text-[10px] text-muted-foreground/70">
        {post.readTime}
      </div>
    </div>
  );
};

export default PostCover;

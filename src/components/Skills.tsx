import { Server, Cpu, Database, Code2, Cloud, GitBranch } from "lucide-react";
import { Reveal } from "./Reveal";

function Window({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass-card rounded-3xl overflow-hidden h-full">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-card/50">
        <span className="size-3 rounded-full bg-code-red/80" />
        <span className="size-3 rounded-full bg-code-orange/80" />
        <span className="size-3 rounded-full bg-code-green/80" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">{title}</span>
      </div>
      <div className="p-6 font-mono text-sm">{children}</div>
    </div>
  );
}

const muted = "text-muted-foreground";
const fg = "text-foreground";
const green = "text-code-green";

const stacks = [
  {
    icon: Code2,
    title: "frontend.stack",
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
    from: "right" as const,
  },
  {
    icon: Database,
    title: "backend.stack",
    items: ["Node.js", "PostgreSQL", "Python", "Firebase"],
    from: "center" as const,
  },
  {
    icon: Server,
    title: "infra.stack",
    items: ["Linux", "Docker", "Homelab", "Cloudflare"],
    from: "left" as const,
  },
  {
    icon: Cpu,
    title: "tools.stack",
    items: ["Git", "Figma", "Blender", "After Effects"],
    from: "center" as const,
  },
  {
    icon: GitBranch,
    title: "workflow.stack",
    items: ["CI/CD", "Bash", "Automation", "Self-hosting"],
    from: "right" as const,
  },
  {
    icon: Cloud,
    title: "deploy.stack",
    items: ["Vercel", "Cloudflare", "Render", "VPS"],
    from: "left" as const,
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative z-10 px-6 pb-24 max-w-6xl mx-auto">
      <Reveal>
        <p className="font-mono text-xs text-muted-foreground mb-4">// skills</p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        <Reveal from="left">
          <Window title="skills.ts">
            <pre className="overflow-x-auto leading-relaxed">
              <code>
                <span className={muted}>const</span> <span className={fg}>ahsan_mohammed</span> = {"{"}
                {"\n  "}<span className={fg}>pronouns</span>: [<span className={green}>"he"</span>, <span className={green}>"him"</span>],
                {"\n  "}<span className={fg}>languages</span>: [<span className={green}>"JavaScript"</span>, <span className={green}>"TypeScript"</span>, <span className={green}>"Python"</span>],
                {"\n  "}<span className={fg}>askMeAbout</span>: [<span className={green}>"web dev"</span>, <span className={green}>"video editor"</span>],
                {"\n  "}<span className={fg}>technologies</span>: {"{"}
                {"\n    "}<span className={fg}>frontEnd</span>: [<span className={green}>"React.js"</span>, <span className={green}>"Next.js"</span>, <span className={green}>"Tailwind"</span>, <span className={green}>"Shadcn"</span>],
                {"\n    "}<span className={fg}>backEnd</span>: [<span className={green}>"Node.js"</span>, <span className={green}>"PostgreSQL"</span>, <span className={green}>"Firebase"</span>],
                {"\n    "}<span className={fg}>tools</span>: [<span className={green}>"Git"</span>, <span className={green}>"Docker"</span>, <span className={green}>"Figma"</span>, <span className={green}>"Linux"</span>],
                {"\n  "}{"}"}
                {"\n"}{"}"};
              </code>
            </pre>
          </Window>
        </Reveal>

        <Reveal from="right" delay={120}>
          <Window title="hobbies.txt">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Everything in my journey has been self-taught, and I genuinely love learning.
                I'm passionate about coding, photography, videography, filmmaking, traveling,
                and researching random topics online, it keeps me curious and grounded.
              </p>
              <p>
                Also, I love drinking coffee at night… te-he <span className="not-italic">😜</span>
              </p>
            </div>
          </Window>
        </Reveal>
      </div>

      <div className="mt-10">
        <Reveal>
          <p className="font-mono text-xs text-muted-foreground mb-4">// stack_overview</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stacks.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} from={s.from} delay={i * 90}>
                <div className="glass-card hover-glow rounded-2xl p-6 h-full flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center size-10 rounded-xl bg-accent border border-border">
                      <Icon className="size-5 text-foreground" />
                    </span>
                    <span className="font-mono text-sm text-muted-foreground">{s.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {s.items.map((it) => (
                      <span key={it} className="chip">{it}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

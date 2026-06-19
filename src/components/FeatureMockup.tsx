import { cn } from "@/lib/utils";

interface FeatureMockupProps {
  type: "gantt" | "kanban" | "workflow" | "dashboard" | "resources";
  className?: string;
}

const ganttTasks = [
  { name: "Workflow Setup",       start: 0,  width: 28, color: "#7C3AED" },
  { name: "Timeline Planning",    start: 20, width: 32, color: "#8B5CF6" },
  { name: "Resource Assignment",  start: 40, width: 25, color: "#A78BFA" },
  { name: "Recurring Operations", start: 55, width: 28, color: "#7C3AED" },
  { name: "Approvals & Review",   start: 70, width: 20, color: "#8B5CF6" },
  { name: "Operational Report",   start: 85, width: 15, color: "#22c55e" },
];

const GanttMockup = () => (
  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 h-full">
    <div className="flex items-center justify-between mb-3">
      <span className="text-xs font-semibold text-gray-600">Gantt Chart — Q2 Roadmap</span>
      <div className="flex gap-1">
        {["W1","W2","W3","W4"].map((w) => (
          <span key={w} className="text-[10px] text-gray-400 w-8 text-center">{w}</span>
        ))}
      </div>
    </div>
    <div className="space-y-2">
      {ganttTasks.map((task) => (
        <div key={task.name} className="flex items-center gap-2">
          <span className="text-[10px] text-gray-500 w-28 truncate flex-shrink-0">{task.name}</span>
          <div className="flex-1 h-5 bg-gray-200 rounded-full relative overflow-hidden">
            <div className="absolute h-full rounded-full" style={{ left: `${task.start}%`, width: `${task.width}%`, backgroundColor: task.color, opacity: 0.85 }} />
          </div>
        </div>
      ))}
    </div>
    <div className="mt-3 flex items-center gap-2">
      <span className="text-[10px] text-gray-400">● Milestone: Launch</span>
      <div className="flex-1 h-px bg-gray-200" />
      <span className="text-[10px] font-semibold text-green-500">On Track</span>
    </div>
  </div>
);

const kanbanColumns = [
  { title: "Backlog",     color: "#94a3b8", cards: ["Research competitors", "Define personas"] },
  { title: "In Progress", color: "#E56399", cards: ["Build auth flow", "Design system"] },
  { title: "Review",      color: "#7F96FF", cards: ["API endpoints"] },
  { title: "Done",        color: "#22c55e", cards: ["Setup repo", "Deploy CI/CD"] },
];

const KanbanMockup = () => (
  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 h-full">
    <div className="flex items-center justify-between mb-3">
      <span className="text-xs font-semibold text-gray-600">Kanban Board — Sprint 3</span>
      <span className="text-[10px] text-evoq-projects-magenta font-medium">8 story points</span>
    </div>
    <div className="grid grid-cols-4 gap-2">
      {kanbanColumns.map((col) => (
        <div key={col.title}>
          <div className="text-[10px] font-bold mb-2 px-2 py-0.5 rounded-full text-white text-center" style={{ backgroundColor: col.color }}>
            {col.title}
          </div>
          <div className="space-y-1.5">
            {col.cards.map((card) => (
              <div key={card} className="bg-white rounded-lg px-2 py-1.5 text-[10px] text-gray-700 shadow-sm border border-gray-100">{card}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const workflowSteps = [
  { label: "To Do",       count: 5, color: "#94a3b8" },
  { label: "In Progress", count: 3, color: "#E56399" },
  { label: "Review",      count: 2, color: "#7F96FF" },
  { label: "Done",        count: 8, color: "#22c55e" },
];

const workflowTasks = [
  { name: "Update onboarding flow", tag: "In Progress", tagColor: "#E56399", due: "Today" },
  { name: "Fix API rate limit bug",  tag: "Review",      tagColor: "#7F96FF", due: "Tomorrow" },
  { name: "Write release notes",     tag: "To Do",       tagColor: "#94a3b8", due: "Fri" },
  { name: "QA regression testing",   tag: "In Progress", tagColor: "#E56399", due: "Today" },
  { name: "Deploy to staging",       tag: "Done",        tagColor: "#22c55e", due: "Done" },
];

const WorkflowMockup = () => (
  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 h-full">
    <div className="flex items-center justify-between mb-3">
      <span className="text-xs font-semibold text-gray-600">Task Management</span>
      <span className="text-[10px] text-gray-400">18 tasks total</span>
    </div>
    <div className="grid grid-cols-4 gap-2 mb-4">
      {workflowSteps.map((s) => (
        <div key={s.label} className="bg-white rounded-lg p-2 text-center border border-gray-100 shadow-sm">
          <div className="text-lg font-bold" style={{ color: s.color }}>{s.count}</div>
          <div className="text-[10px] text-gray-500">{s.label}</div>
        </div>
      ))}
    </div>
    <div className="space-y-1.5">
      {workflowTasks.map((t) => (
        <div key={t.name} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-gray-100 shadow-sm">
          <div className="flex-1 text-[10px] text-gray-700 truncate">{t.name}</div>
          <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full text-white flex-shrink-0" style={{ backgroundColor: t.tagColor }}>{t.tag}</span>
          <span className="text-[9px] text-gray-400 flex-shrink-0">{t.due}</span>
        </div>
      ))}
    </div>
  </div>
);

const DashboardMockup = () => (
  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 h-full">
    <div className="flex items-center justify-between mb-3">
      <span className="text-xs font-semibold text-gray-600">Project Dashboard</span>
      <span className="text-[10px] text-evoq-projects-lavender font-medium">Live</span>
    </div>
    <div className="grid grid-cols-3 gap-2 mb-4">
      {[
        { label: "On Track", value: "8", color: "#22c55e" },
        { label: "At Risk",  value: "3", color: "#f59e0b" },
        { label: "Overdue",  value: "1", color: "#ef4444" },
      ].map((s) => (
        <div key={s.label} className="bg-white rounded-lg p-2 text-center border border-gray-100 shadow-sm">
          <div className="text-xl font-bold" style={{ color: s.color }}>{s.value}</div>
          <div className="text-[10px] text-gray-500">{s.label}</div>
        </div>
      ))}
    </div>
    <div className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm mb-2">
      <div className="text-[10px] text-gray-500 mb-2">Completion by project</div>
      <div className="space-y-2">
        {[
          { name: "Platform Relaunch", pct: 82, color: "#E56399" },
          { name: "Mobile App v2",     pct: 65, color: "#7F96FF" },
          { name: "API Integration",   pct: 48, color: "#A6CFD5" },
          { name: "Marketing Site",    pct: 91, color: "#22c55e" },
        ].map((p) => (
          <div key={p.name} className="flex items-center gap-2">
            <span className="text-[9px] text-gray-500 w-24 truncate">{p.name}</span>
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${p.pct}%`, backgroundColor: p.color }} />
            </div>
            <span className="text-[9px] font-semibold text-gray-600">{p.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const members = [
  { name: "Alex R.",  role: "Dev",    load: 90, color: "#E56399" },
  { name: "Sara K.",  role: "Design", load: 55, color: "#7F96FF" },
  { name: "Mike T.",  role: "QA",     load: 70, color: "#A6CFD5" },
  { name: "Priya N.", role: "PM",     load: 45, color: "#22c55e" },
  { name: "James L.", role: "Dev",    load: 85, color: "#E56399" },
];

const ResourcesMockup = () => (
  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 h-full">
    <div className="flex items-center justify-between mb-3">
      <span className="text-xs font-semibold text-gray-600">Resource Workload</span>
      <span className="text-[10px] text-gray-400">This sprint</span>
    </div>
    <div className="space-y-3">
      {members.map((m) => (
        <div key={m.name} className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0" style={{ backgroundColor: m.color }}>
            {m.name[0]}
          </div>
          <div className="flex-1">
            <div className="flex justify-between mb-0.5">
              <span className="text-[10px] font-medium text-gray-700">{m.name}</span>
              <span className={`text-[9px] font-semibold ${m.load >= 80 ? "text-red-500" : "text-gray-500"}`}>{m.load}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all" style={{ width: `${m.load}%`, backgroundColor: m.load >= 80 ? "#ef4444" : m.color }} />
            </div>
          </div>
          <span className="text-[9px] text-gray-400 w-10 flex-shrink-0">{m.role}</span>
        </div>
      ))}
    </div>
    <div className="mt-3 flex items-center gap-1.5 bg-red-50 rounded-lg px-3 py-1.5">
      <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
      <span className="text-[10px] text-red-600">Alex R. and James L. are over-allocated</span>
    </div>
  </div>
);

const FeatureMockup = ({ type, className }: FeatureMockupProps) => (
  <div className={cn("w-full", className)}>
    {type === "gantt"     && <GanttMockup />}
    {type === "kanban"    && <KanbanMockup />}
    {type === "workflow"  && <WorkflowMockup />}
    {type === "dashboard" && <DashboardMockup />}
    {type === "resources" && <ResourcesMockup />}
  </div>
);

export default FeatureMockup;

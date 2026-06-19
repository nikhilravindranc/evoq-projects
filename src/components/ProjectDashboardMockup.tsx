import { CheckCircle2, Clock, AlertCircle, BarChart3, Users, Calendar } from "lucide-react";

const tasks = [
  { name: "Design System Setup", status: "done",        assignee: "A", progress: 100 },
  { name: "API Integration",     status: "in-progress", assignee: "B", progress: 65  },
  { name: "User Testing Phase",  status: "in-progress", assignee: "C", progress: 40  },
  { name: "Performance Audit",   status: "pending",     assignee: "D", progress: 0   },
  { name: "Launch Preparation",  status: "pending",     assignee: "E", progress: 0   },
];

const statusColor: Record<string, string> = {
  done:          "#22c55e",
  "in-progress": "#E56399",
  pending:       "#94a3b8",
};

const ProjectDashboardMockup = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden text-sm select-none">
      {/* Top bar */}
      <div className="bg-evoq-projects-deep-purple px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="text-white/70 text-xs font-medium">EVOQ Projects — Product Launch Q2</span>
        <div className="w-16" />
      </div>

      {/* Stat row */}
      <div className="grid grid-cols-3 gap-px bg-gray-100 border-b border-gray-200">
        {[
          { icon: BarChart3, label: "Progress", value: "68%", color: "#E56399" },
          { icon: Users,     label: "Members",  value: "12",  color: "#7F96FF" },
          { icon: Calendar,  label: "Due",      value: "14d", color: "#A6CFD5" },
        ].map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="bg-white px-4 py-3 flex items-center gap-2">
            <Icon className="w-4 h-4 flex-shrink-0" style={{ color }} />
            <div>
              <div className="text-xs text-gray-400">{label}</div>
              <div className="font-bold text-gray-800">{value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
        <div className="flex justify-between text-xs text-gray-500 mb-1.5">
          <span>Overall completion</span>
          <span className="font-semibold text-evoq-projects-magenta">68%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-evoq-projects-magenta rounded-full" style={{ width: "68%" }} />
        </div>
      </div>

      {/* Task list */}
      <div className="divide-y divide-gray-50">
        {tasks.map((task) => (
          <div key={task.name} className="px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 transition-colors">
            {task.status === "done" ? (
              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
            ) : task.status === "in-progress" ? (
              <Clock className="w-4 h-4 text-evoq-projects-magenta flex-shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-gray-300 flex-shrink-0" />
            )}
            <span className={`flex-1 text-xs ${task.status === "done" ? "line-through text-gray-400" : "text-gray-700"}`}>
              {task.name}
            </span>
            {task.progress > 0 && (
              <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${task.progress}%`, backgroundColor: statusColor[task.status] }}
                />
              </div>
            )}
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
              style={{ backgroundColor: statusColor[task.status] }}
            >
              {task.assignee}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDashboardMockup;

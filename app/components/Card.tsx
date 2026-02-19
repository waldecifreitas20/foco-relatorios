import type { ServiceStatus } from "~/types/ServiceStatus";

interface StatusCardProps {
  status: ServiceStatus;
  value: number;
}

export function StatusCard({ status, value }: StatusCardProps) {
  return (
    <li
      className="bg-white border border-slate-200 rounded-lg p-6 w-full block">
      <p className="font-semibold text-sm text-slate-500 uppercase">{status}</p>
      <p className="text-6xl font-semibold text-slate-800 my-6">{value}</p>
    </li>
  );
}
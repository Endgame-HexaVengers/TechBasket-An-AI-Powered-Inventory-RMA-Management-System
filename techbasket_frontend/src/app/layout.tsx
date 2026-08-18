import './globals.css';
import DashboardShell from '@/components/layout/DashboardShell';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-slate-50 text-slate-900 antialiased font-sans">
        <DashboardShell>{children}</DashboardShell>
      </body>
    </html>
  );
}

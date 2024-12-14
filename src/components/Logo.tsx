import { Zap } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
      <span className="text-2xl font-bold text-green-600 dark:text-green-400">3S Electric</span>
    </div>
  );
};
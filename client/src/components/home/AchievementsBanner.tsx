import { Award, ShieldCheck, Star, Activity } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

export default function AchievementsBanner() {
  const achievements = [
    { icon: Award, title: "Best Hospital 2023", subtitle: "National Health Excellence" },
    { icon: ShieldCheck, title: "JCI Accredited", subtitle: "Global Quality Standard" },
    { icon: Star, title: "5-Star Rating", subtitle: "Patient Satisfaction" },
    { icon: Activity, title: "Level 1 Trauma", subtitle: "Advanced Emergency Care" },
  ];

  return (
    <FadeIn delay={0.6} direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 mb-20">
      <div className="bg-gradient-to-r from-base-200 via-base-100 to-base-200 rounded-[2rem] p-6 lg:p-8 shadow-sm border border-base-200/60 overflow-hidden relative">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
          {achievements.map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <item.icon className="h-8 w-8 text-primary group-hover:text-primary-content transition-colors" />
              </div>
              <div>
                <h4 className="font-bold text-base-content whitespace-nowrap text-lg">{item.title}</h4>
                <p className="text-sm text-base-content/60 font-medium">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

import { achievements } from "@/data/achievements";

export default function Achievements() {
  const competitions = achievements.filter(a => a.category === "Competition");
  const hackathons = achievements.filter(a => a.category === "Hackathon");

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Achievements & Awards
          </h2>
          <p className="text-xl text-muted-foreground">
            Recognition in competitions and hackathons
          </p>
        </div>

        {/* Competitions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-primary text-center">Competitions & Contests</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitions.map((achievement, index) => (
              <div
                key={achievement.id}
                className="terminal-card hanging-card rounded-xl p-6"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
                data-testid={`achievement-${achievement.id}`}
              >
                {/* Terminal Header */}
                <div className="flex items-center mb-4 pb-3 border-b border-border">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">
                    ~/awards/{achievement.id}.cert
                  </span>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${achievement.iconBg} rounded-lg flex items-center justify-center mr-4 animate-glow`}>
                    <i className={`${achievement.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{achievement.title}</h4>
                    <p className="text-muted-foreground text-sm">{achievement.year}</p>
                  </div>
                </div>
                
                <div className="code-block text-sm mb-3">
                  <span className="text-cyber-green">$</span> <span className="text-foreground">cat achievement.txt</span><br/>
                  <span className="text-muted-foreground">{achievement.description}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="bg-background text-cyber-green px-3 py-1 rounded-full text-sm border border-border font-mono">
                    {achievement.position}
                  </span>
                  <span className="text-accent font-mono text-xs">
                    {achievement.event}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathons */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-primary text-center">Hackathons & Innovation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hackathons.map((achievement, index) => (
              <div
                key={achievement.id}
                className="terminal-card hanging-card rounded-xl p-6"
                style={{
                  animationDelay: `${(index + competitions.length) * 0.2}s`
                }}
                data-testid={`hackathon-${achievement.id}`}
              >
                {/* Terminal Header */}
                <div className="flex items-center mb-4 pb-3 border-b border-border">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">
                    ~/hackathons/{achievement.id}.log
                  </span>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${achievement.iconBg} rounded-lg flex items-center justify-center mr-4 animate-glow`}>
                    <i className={`${achievement.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{achievement.title}</h4>
                    <p className="text-muted-foreground text-sm">{achievement.year}</p>
                  </div>
                </div>
                
                <div className="code-block text-sm mb-3">
                  <span className="text-cyber-green">$</span> <span className="text-foreground">cat result.md</span><br/>
                  <span className="text-muted-foreground">{achievement.description}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="bg-background text-cyber-green px-3 py-1 rounded-full text-sm border border-border font-mono">
                    {achievement.position}
                  </span>
                  <span className="text-accent font-mono text-xs">
                    {achievement.event}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
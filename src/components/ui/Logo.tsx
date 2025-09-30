
interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-40 h-10',
    md: 'w-56 h-14',
    lg: 'w-64 h-16'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="https://static.readdy.ai/image/a4ac012d2ef5b8e88ed8146b71225bab/d61315536ac6977552d3649e2b5b1723.jfif"
        alt="RadAssist AI"
        className={`object-contain ${sizeClasses[size]}`}
      />
    </div>
  );
}

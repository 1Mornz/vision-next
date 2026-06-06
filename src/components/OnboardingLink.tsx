import { ONBOARDING_URL } from "@/lib/site";

type OnboardingLinkProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function OnboardingLink({ className, style, children, onClick }: OnboardingLinkProps) {
  return (
    <a
      href={ONBOARDING_URL}
      className={className}
      style={style}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {children}
    </a>
  );
}

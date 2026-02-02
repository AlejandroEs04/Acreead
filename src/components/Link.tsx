import { useRouter } from "../hooks/useRouter";

export const Link = ({ to, children }: any) => {
  const router = useRouter();

  return (
    <a
      href={to}
      onClick={e => {
        e.preventDefault();
        router?.navigate(to);
      }}
    >
      {children}
    </a>
  );
};

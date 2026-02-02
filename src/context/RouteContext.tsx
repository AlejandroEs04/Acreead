import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
  type ComponentType
} from "react";
import NotFound from "../views/errors/NotFound";
import type { Parameter, RouteType } from "../types/routes";

type RouterContextType = {
  path: string;
  navigate: (path: string) => void;
  parameters: Parameter[]
};

export const RouterContext = createContext<RouterContextType | null>(null);

export const RouterProvider = ({
  routes
}: {
  routes: RouteType[];
}) => {
  const [path, setPath] = useState(window.location.pathname);
  const [parameters, setParameters] = useState<Parameter[]>([])

  useEffect(() => {
    const onPopState = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    setParameters([])

    const parameters = window.location.href.split('?')[1]

    if(parameters)
    {
      parameters.split('&').map((parameter: string) => {
        const [key, value] = parameter.split('=')
        setParameters(prev => [...prev, {[key]: value}])
      })
    }
  }, [path])

  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setPath(to);
  };

  const route = routes.find(r => r.path === path);

  const Layout: ComponentType<{ children: ReactNode }> =
    (typeof route?.layout === "function"
      ? (route.layout as ComponentType<{ children: ReactNode }>)
      : ({ children }: { children: ReactNode }) => <>{children}</>);

  const View: ComponentType = (typeof route?.view === "function"
    ? (route.view as ComponentType)
    : NotFound);

  return (
    <RouterContext.Provider value={{ path, navigate, parameters }}>
      <Layout>
        <View />
      </Layout>
    </RouterContext.Provider>
  );
};

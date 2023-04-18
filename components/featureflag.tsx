import { useRouter } from "next/router";

export function FeatureFlag(params: {
  name: string;
  feature: JSX.Element;
  default: JSX.Element;
}): JSX.Element {
  const { query } = useRouter();

  if (query["feature-flag"] === params.name) {
    return params.feature;
  }
  return params.default;
}

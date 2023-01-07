import Image from "next/image";
import { List } from "components/copy";
import * as project from "components/project";
import * as color from "components/color";

export default function Page() {
  return <Dropmark />;
}

export function Dropmark() {
  return (
    <project.Layout color={color.LemonLime}>
      <project.TopLeft>
        <project.Description type="Product Design" title="Dropmark">
          <p className="italic">Product & Design Goals:</p>

          <p>
            This project had one singular product goal and KPI: to increase
            conversion rate.
          </p>

          <p>
            To achieve this, we also identified some more specific design and UX
            goals:
          </p>

          <List>
            <li>Significantly improve UX and streamline the funnel</li>

            <li>
              Enhance visual design with better readability and information
              hierarchy
            </li>

            <li>Focus on a great mobile experience</li>
          </List>
        </project.Description>
      </project.TopLeft>

      <project.BottomRight>
        <Image
          className="rounded-lg"
          src="/images/dropmark/placeholder.png"
          alt="Dropmark"
          width={700}
          height={700}
        />
      </project.BottomRight>
    </project.Layout>
  );
}

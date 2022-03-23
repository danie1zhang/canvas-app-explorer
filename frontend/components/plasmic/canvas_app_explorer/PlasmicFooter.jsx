// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mXv5TZ5SUPGRneH9RoMn6q
// Component: SxuS7aSzfTV9l
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants as useScreenVariantsthj0P9Nxeh81I } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: thj0p9NXEH81i/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "../library_plasmic_color_type/plasmic_library_plasmic_color_type.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import "./plasmic_canvas_app_explorer.css"; // plasmic-import: mXv5TZ5SUPGRneH9RoMn6q/projectcss
import "./PlasmicFooter.css"; // plasmic-import: SxuS7aSzfTV9l/css

export const PlasmicFooter__VariantProps = new Array();

export const PlasmicFooter__ArgProps = new Array();

function PlasmicFooter__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsthj0P9Nxeh81I()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "plasmic_default__all",
        "plasmic_default__div",
        "root_reset_mXv5TZ5SUPGRneH9RoMn6q",
        "plasmic_default_styles",
        "plasmic_mixins",
        "plasmic_tokens",
        "plasmic_tokens",
        "Footer__root__sI9X3"
      )}
    >
      <div
        className={classNames(
          "plasmic_default__all",
          "plasmic_default__div",
          "Footer__freeBox__zZokF"
        )}
      >
        <div
          className={classNames(
            "plasmic_default__all",
            "plasmic_default__div",
            "Footer__freeBox__rfGbA"
          )}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              "plasmic_default__all",
              "plasmic_default__div",
              "__wab_text",
              "Footer__text__l8OFu"
            )}
          >
            {"© Copyright. "}
          </div>

          <a
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(
              "plasmic_default__all",
              "plasmic_default__a",
              "__wab_text",
              "Footer__link__cFZm1"
            )}
            href={"https://www.plasmic.app/"}
          >
            {"University of Michigan"}
          </a>
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "text", "link"],
  text: ["text"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */

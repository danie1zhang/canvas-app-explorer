// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mXv5TZ5SUPGRneH9RoMn6q
// Component: JyIyDBiGW-
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "../library_plasmic_color_type/plasmic_library_plasmic_color_type.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import "./plasmic_canvas_app_explorer.css"; // plasmic-import: mXv5TZ5SUPGRneH9RoMn6q/projectcss
import "./PlasmicAddRemoveButton.css"; // plasmic-import: JyIyDBiGW-/css

export const PlasmicAddRemoveButton__VariantProps = new Array(
  "removeToolFromSite"
);

export const PlasmicAddRemoveButton__ArgProps = new Array();

function PlasmicAddRemoveButton__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "plasmic_default__all",
        "plasmic_default__div",
        "__wab_text",
        "root_reset_mXv5TZ5SUPGRneH9RoMn6q",
        "plasmic_default_styles",
        "plasmic_mixins",
        "plasmic_tokens",
        "plasmic_tokens",
        "AddRemoveButton__root___2GPd2",
        {
          AddRemoveButton__rootremoveToolFromSite___2GPd2Vv3Fi: hasVariant(
            variants,
            "removeToolFromSite",
            "removeToolFromSite"
          )
        }
      )}
    >
      {hasVariant(variants, "removeToolFromSite", "removeToolFromSite")
        ? "Remove Tool "
        : "+ Add Tool"}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAddRemoveButton__ArgProps,
      internalVariantPropNames: PlasmicAddRemoveButton__VariantProps
    });

    return PlasmicAddRemoveButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAddRemoveButton";
  } else {
    func.displayName = `PlasmicAddRemoveButton.${nodeName}`;
  }
  return func;
}

export const PlasmicAddRemoveButton = Object.assign(
  // Top-level PlasmicAddRemoveButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicAddRemoveButton
    internalVariantProps: PlasmicAddRemoveButton__VariantProps,
    internalArgProps: PlasmicAddRemoveButton__ArgProps
  }
);

export default PlasmicAddRemoveButton;
/* prettier-ignore-end */

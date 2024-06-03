import React, { useContext } from "react";
import SideBar from "./SideBar";
import { INestedLayout } from "../type/interface";

export default function NestedLayout(props: INestedLayout) {
  const { className, children } = props;

  return (
    <div>
      {children}
      <SideBar />
    </div>
  );
}

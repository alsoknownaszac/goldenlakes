import React from "react";
import { ILayout } from "../type/interface";
import CursorManager from "../CustomCursor/CursorManager";
import CustomCursor from "../CustomCursor";

export default function Layout(props: ILayout) {
  const { className, children } = props;

  return (
    <CursorManager>
      <>
        <CustomCursor />
        {children}
      </>
    </CursorManager>
  );
}

// export default function Layout(props: ILayout) {
//   const { className, children } = props;

//   return (
//     <div className={`bg-screen min-h-screen pt-[8rem]`}>
//       <div className={`mt-[3.3rem] mx-auto bg-white ${className}`}>
//         {children}
//       </div>
//     </div>
//   );
// }

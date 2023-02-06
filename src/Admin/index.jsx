// import { Suspense } from "react";
// import { Route, Routes, useLocation } from "react-router-dom";
// import Error from "../App/page/Error";
// import RequireAuth from "../RequireAuth";
// import Layout from "./EMR/layout/Layout";
// import LogInAdmin from "./LoginPage";
// const ROLES = {
//   User: 2001,
//   Admin: 5150,
// };
// export function Admin() {
//   return (
//     <Suspense fallback={null}>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           {/* public routes */}
//           <Route path="login" element={<LogInAdmin />} />
//           {/* we want to protect these routes */}
//           <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
//             <Route path="/" element={<AdminEMR />} />
//           </Route>

//           <Route path="*" element={<Error />} />
//         </Route>
//       </Routes>
//     </Suspense>
//   );
// }

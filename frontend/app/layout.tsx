import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";





// export default function RootLayout({ children }) {
//   return (
//     <html>
//       <body>
//         <div className="flex">

//           {/* Sidebar */}
//           <div className="w-60 h-screen bg-gray-800 text-white p-5">
//             <h2 className="text-xl font-bold mb-6">EduMerge</h2>

//             <ul className="space-y-4">
//               <li><a href="/dashboard">Dashboard</a></li>
//               <li><a href="/applicants">Applicants</a></li>
//               <li><a href="/allocation">Allocation</a></li>
//             </ul>
//           </div>

//           {/* Main Content */}
//           <div className="flex-1 p-6 bg-gray-100">
//             {children}
//           </div>

//         </div>
//       </body>
//     </html>
//   );
// }

import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="flex">

          {/* Sidebar */}
          <div className="w-60 h-screen bg-gray-800 text-white p-5">
            <h2 className="text-xl font-bold mb-6">EduMerge</h2>

            <ul className="space-y-4">
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/applicants">Applicants</a></li>
              <li><a href="/allocation">Allocation</a></li>
              <li><a href="/admissions">Admissions</a></li>
            </ul>
          </div>

          {/* Main */}
          <div className="flex-1 p-6 bg-gray-100">
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}
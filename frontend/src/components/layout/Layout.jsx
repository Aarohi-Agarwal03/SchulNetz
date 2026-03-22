function Layout({ children }) {
    return (
        <div>
            <h1>Layout Working</h1>
            {children}
        </div>
    );
}

export default Layout;
// import Sidebar from "./Sidebar";
// import Topbar from "./Topbar";
//
// function Layout({ children }) {
//     return (
//         <div className="flex min-h-screen bg-gray-100">
//
//             {/* SIDEBAR */}
//             <Sidebar />
//
//             {/* RIGHT SIDE */}
//             <div className="flex-1 flex flex-col">
//
//                 {/* TOPBAR */}
//                 <Topbar />
//
//                 {/* CONTENT */}
//                 <div className="flex-1 p-6">
//                     {children}
//                 </div>
//
//                 {/* FOOTER */}
//                 <div className="bg-white text-center text-sm text-gray-500 py-3 border-t">
//                     © 2026 SchulNetz ERP
//                 </div>
//
//             </div>
//         </div>
//     );
// }
//
// export default Layout;
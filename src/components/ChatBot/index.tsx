// "use client";

// import { useEffect, useState } from "react";

// export default function ChatBot() {
//     const [isVisible, setIsVisible] = useState(false);

//     // Show chatbot after scrolling down 300 pixels
//     useEffect(() => {
//         const toggleVisibility = () => {
//             if (window.pageYOffset > 300) {
//                 setIsVisible(true);
//             } else {
//                 setIsVisible(false);
//             }
//         };

//         window.addEventListener("scroll", toggleVisibility);
//         return () => window.removeEventListener("scroll", toggleVisibility);
//     }, []);

//     return (
//         <>
//             {isVisible && (
//                 <div className="fixed bottom-4 right-4 z-[999] w-80 h-96">
//                     <iframe 
//                         src="https://app.chatsimple.ai/iframe23/ea6c2304-3c64-48ab-93a6-46a60e253142/e0758af6-c79e-49c9-b8dd-8bbe20ffd3cc/d28a3a75-7ccd-4883-b103-3c5a13264633" 
//                         height="400" 
//                         title="Chatsimple" 
//                         style={{
//                             display: 'block',
//                             marginLeft: 'auto',
//                             marginRight: 'auto',
//                             border: 'none',
//                             borderRadius: '20px',
//                             boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
//                             width: '100%',
//                             height: '100%'
//                         }}
//                     />
//                 </div>
//             )}
//         </>
//     );
// } 
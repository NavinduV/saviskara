import React, { useEffect, useState } from 'react';

const SkeletonScreen = () => {
  return (
    
      <div className="bg-gray-300/50 w-full h-12 rounded-md mt-2 animate-pulse"></div>
  
  );
};

const App = () => {
//   const [users, updateUsers] = useState(null);

//   useEffect(() => {
//     // Simulate API call
//     setTimeout(() => {
//       updateUsers([
//         {
//           thumbnail: 'https://randomuser.me/api/portraits/med/men/75.jpg',
//           name: 'John Smith',
//           desc: 'I am a freelancer currently based in London',
//         },
//       ]);
//     }, 4000);
//   }, []);

//   if (!users) {
//     return <SkeletonScreen />;
//   }

  return (
    <section className="w-full flex flex-col items-center">
      <SkeletonScreen />
    </section>
  );
};

export default App;

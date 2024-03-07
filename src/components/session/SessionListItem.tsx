// import {
//   Chip,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import React from "react";

// export interface SessionItemProps {
//   title: string;
//   date: Date;
//   isPrivate: boolean;
//   isOngoing: boolean;
// }

// const SessionListItem: React.FC<SessionItemProps> = ({
//   title,
//   date,
//   isOngoing,
//   isPrivate,
// }) => {
//   return (
//     <ListItem disablePadding>
//       <ListItemButton sx={{ paddingX: 0 }}>
//         <ListItemIcon sx={{ justifyContent: "center", width: "72px" }}>
//           {isPrivate ? (
//             <Chip label="private" color="primary" sx={{ minWidth: "70px" }} />
//           ) : (
//             <Chip label="public" color="success" sx={{ minWidth: "70px" }} />
//           )}
//         </ListItemIcon>
//         <ListItemIcon sx={{ justifyContent: "center", width: "72px" }}>
//           {isOngoing && <Chip label="ing" color="error" />}
//         </ListItemIcon>

//         <ListItemText primary={title} />
//         <ListItemText
//           primary={date.toLocaleDateString()}
//           sx={{ textAlign: "end" }}
//         />
//       </ListItemButton>
//     </ListItem>
//   );
// };

// export default SessionListItem;

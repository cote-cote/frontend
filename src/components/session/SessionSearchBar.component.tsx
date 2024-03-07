// import SearchIcon from "@mui/icons-material/Search";
// import { Box, IconButton, InputBase, Paper } from "@mui/material";
// import { useCallback, useRef } from "react";
// import { useRecoilState } from "recoil";
// import { sessionKeywordState } from "../../context/session/keyword";

// const SessionSearchBar: React.FC = () => {
//   const [, setSessionKeyword] = useRecoilState<string | null>(
//     sessionKeywordState
//   );
//   const inputRef = useRef(null);

//   const handleSearch = useCallback(
//     (_) => setSessionKeyword(inputRef.current.value),
//     [setSessionKeyword]
//   );

//   return (
//     <Box display="flex" justifyContent="end">
//       <Paper sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}>
//         <InputBase
//           id="session-keyword-input"
//           inputRef={inputRef}
//           sx={{ ml: 1, flex: 1 }}
//           onKeyDown={(
//             e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
//           ) => {
//             if (e.key == "Enter") handleSearch(e);
//           }}
//         />
//         <IconButton type="button" sx={{ p: "10px" }} onClick={handleSearch}>
//           <SearchIcon />
//         </IconButton>
//       </Paper>
//     </Box>
//   );
// };

// export default SessionSearchBar;

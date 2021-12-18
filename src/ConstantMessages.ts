const mobileWelcome = `████████████████────────────────██████████████████
████████████████─────────────────█████████████████
███████████████───────────────────████████████████
██████████████────────────────────████████████████
█████████████──────────────────────███████████████
████████████───────────────────────███████████████
███████████─────────────────────────██████████████
██████████──────────────────────────██████████████
██████████───────────────────────────█████████████
██████████───────────────────────────█████████████
██████████───────────────────────────────█████████
██████████───────────────────────────────────█████
██████████───────────────────────────███─────────█
██████████────────────────────────────███████────█
██████████───────────────────────────█████████████
██████████────────────────────────────████████████
███████████────────────────────────────███████████
███████████─────────────────────────────██████████
██████████──────────────────────────────██████████
████████───██────────────────────────────█████████
███████───███────────────────────────────█████████
██████────███───────────────────────────██████████
█████────████─────────────────────────████████████
█████─██████────────────────────────────██████████
███████████──────────────────────────────█████████
██████████───────────────────────────────█████████
██████████───────────────────────────██──█████████
█████████─────────────────────────────██──████████
████████──────────────────────────────██──████████
███████───────────────────────────────██──██───███
██████───────────────────────────────███──██─────█
█████─────────────────────────██────████──██──────
█████─────────────────────────██████████───█──────
████──────────────────────────██████████──────────
████─────────────────────────███████████──────────
███───────────────────────────██████████─────────█
██────────────────────────────██████████─────────█
█──────────────────────────────██████████───────██
─────██────────────────────────████████████────███
────███████─────────────────────██████████████████
───████████████──────────────────█████████████████
──███████████████────────────────█████████████████


\x1b[31;1m    ,o888888o.            .8.               d888888o.        8 8888888888        d888888o.
   8888     \`88.         .888.            .\`8888:’ \`88.       8 8888          .\`8888:’ \`88. 
,8  888       \`8.       :88888.         8.\`8888.   Y8        8 8888         \`8.\`8888.  Y8  
88 888                 .  \`88888.       \`8.\`8888.            8 8888        \`8.\`8888.  
88 888                .8.  \`88888.       \`8.\`8888.          8 8888888888    \`8.\`8888.     
88 888               .8\`8. \`88888.       \`8.\`8888.          8 8888          \`8.\`8888.  
88 888              .8’ \`8.  \`88888.        \`8.\`8888.       8 8888             \`8.\`8888.  
\`8 888       .8’   .8’   \`8.  \`88888.   8b   \`8.\`8888.     8 8888           8b   \`8.\`8888.  
   8888     ,88’  .88888888.  \`88888.   \`8b.  ;8.\`8888     8 8888            \`8b.  ;8.\`8888   
    \`8888888P’   .8’       \`8.  \`88888.  \`Y8888P ,88P’    8 8888888888         \`Y8888P ,88P’ \x1b[0m


8 888888888o     \`8.\`8888.          ,8’ 
8 8888      \`88.   \`8.\`8888.      ,8’  
8 8888       \`88    \`8.\`8888.    ,8’   
8 8888        ,88     \`8.\`8888. ,8’    
8 8888.      ,88’       \`8.\`88888’     
8 8888888888               \`8. 8888      
8 8888      \`88.          \`8 8888      
8 8888         88          8 8888      
8 8888       ,88’          8 8888      
8 888888888P               8 8888      


8 8888       ,88’          .8.          8888888 88888       88888 8 8888  
8 8888      ,88’          .888.            8 8888           8 8888         
8 8888     ,88’          :88888.           8 8888          8 8888         
8 8888    ,88’          .\`88888.           8 8888          8 8888         
8 8888   ,88’          .8. \`88888.         8 8888         8 8888888888
8 8888  88’           .8\`8. \`88888.        8 8888         8 8888         
8 888888<            .8’ \`8. \`88888.       8 8888        8 8888         
8 8888  \`Y8.        .8’   \`8. \`88888.      8 8888        8 8888         
8 8888    \`Y8.     .88888888   \`88888.     8 8888       8 8888         
8 8888       \`Y8. .8’      \`8. \`88888.     8 8888       8 8888888888


케탐정 사무소 수사 시뮬레이터 Watson v1.0 ⓒ Cases By Kate
`;

const pcWelcome = `████████████████────────────────██████████████████
████████████████─────────────────█████████████████         \x1b[31;1m     ,o888888o.            .8.               d888888o.        8 8888888888        d888888o.\x1b[0m
███████████████───────────────────████████████████         \x1b[31;1m   8888     \`88.         .888.            .\`8888:’ \`88.       8 8888          .\`8888:’ \`88. \x1b[0m
██████████████────────────────────████████████████         \x1b[31;1m,8  888       \`8.       :88888.         8.\`8888.   Y8        8 8888         \`8.\`8888.  Y8  \x1b[0m
█████████████──────────────────────███████████████         \x1b[31;1m88 888                 .  \`88888.       \`8.\`8888.            8 8888        \`8.\`8888.  \x1b[0m
████████████───────────────────────███████████████         \x1b[31;1m88 888                .8.  \`88888.       \`8.\`8888.          8 8888888888    \`8.\`8888.     \x1b[0m
███████████─────────────────────────██████████████         \x1b[31;1m88 888               .8\`8. \`88888.       \`8.\`8888.          8 8888          \`8.\`8888.  \x1b[0m
██████████──────────────────────────██████████████         \x1b[31;1m88 888              .8’ \`8.  \`88888.        \`8.\`8888.       8 8888             \`8.\`8888.  \x1b[0m
██████████───────────────────────────█████████████         \x1b[31;1m\`8 888       .8’   .8’   \`8.  \`88888.   8b   \`8.\`8888.     8 8888           8b   \`8.\`8888.  \x1b[0m
██████████───────────────────────────█████████████         \x1b[31;1m   8888     ,88’  .88888888.  \`88888.   \`8b.  ;8.\`8888     8 8888            \`8b.  ;8.\`8888   \x1b[0m
██████████───────────────────────────────█████████         \x1b[31;1m    \`8888888P’   .8’       \`8.  \`88888.  \`Y8888P ,88P’    8 8888888888         \`Y8888P ,88P’ \x1b[0m
██████████───────────────────────────────────█████         
██████████───────────────────────────███─────────█         
██████████────────────────────────────███████────█         8 888888888o     \`8.\`8888.          ,8’ 
██████████───────────────────────────█████████████         8 8888      \`88.   \`8.\`8888.      ,8’  
██████████────────────────────────────████████████         8 8888       \`88    \`8.\`8888.    ,8’   
███████████────────────────────────────███████████         8 8888        ,88     \`8.\`8888. ,8’    
███████████─────────────────────────────██████████         8 8888.      ,88’       \`8.\`88888’     
██████████──────────────────────────────██████████         8 8888888888               \`8. 8888      
████████───██────────────────────────────█████████         8 8888      \`88.          \`8 8888      
███████───███────────────────────────────█████████         8 8888         88          8 8888      
██████────███───────────────────────────██████████         8 8888       ,88’          8 8888      
█████────████─────────────────────────████████████         8 888888888P               8 8888      
█████─██████────────────────────────────██████████         
███████████──────────────────────────────█████████         
██████████───────────────────────────────█████████         8 8888       ,88’          .8.          8888888 88888       88888 8 8888  
██████████───────────────────────────██──█████████         8 8888      ,88’          .888.            8 8888           8 8888         
█████████─────────────────────────────██──████████         8 8888     ,88’          :88888.           8 8888          8 8888         
████████──────────────────────────────██──████████         8 8888    ,88’          .\`88888.           8 8888          8 8888         
███████───────────────────────────────██──██───███         8 8888   ,88’          .8. \`88888.         8 8888         8 8888888888
██████───────────────────────────────███──██─────█         8 8888  88’           .8\`8. \`88888.        8 8888         8 8888         
█████─────────────────────────██────████──██──────         8 888888<            .8’ \`8. \`88888.       8 8888        8 8888         
█████─────────────────────────██████████───█──────         8 8888  \`Y8.        .8’   \`8. \`88888.      8 8888        8 8888         
████──────────────────────────██████████──────────         8 8888    \`Y8.     .88888888   \`88888.     8 8888       8 8888         
████─────────────────────────███████████──────────         8 8888       \`Y8. .8’      \`8. \`88888.     8 8888       8 8888888888
███───────────────────────────██████████─────────█         
██────────────────────────────██████████─────────█         
█──────────────────────────────██████████───────██         
─────██────────────────────────████████████────███         
────███████─────────────────────██████████████████    
───████████████──────────────────█████████████████         
──███████████████────────────────█████████████████         케탐정 사무소 수사 시뮬레이터 Watson v1.0 ⓒ Cases By Kate
`;

export default {
    welcome: window.innerWidth < 1166 ? mobileWelcome : pcWelcome,
};
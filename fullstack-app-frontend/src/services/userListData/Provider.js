import React, { useState, useCallback } from "react";
import axios from 'axios'
import PackageContext from './Context'

const Provider = (props) => {
    
    const [userListData, setUserListData] = useState([])
    
    return(
        <PackageContext.Provider value={{
            data:userListData,
            fetchUserListData: useCallback(async () => {
              try {
                await axios.get("/getUsers")
                .then((userListResp)=>{
                  if(userListResp && userListResp.data && userListResp.data.allUsers){
                    if(userListResp.data.allUsers.length>0){
                      setUserListData(userListResp.data.allUsers);
                    }else{
                      setUserListData([]);
                    }
                  }
                })
                .catch((error) => {
                  console.log(error);
                  throw error;
                })
              } catch (error) {
                console.log(error)
              }
          }, [])
        }}>
            {props.children}
        </PackageContext.Provider>
    );
}

export default Provider;
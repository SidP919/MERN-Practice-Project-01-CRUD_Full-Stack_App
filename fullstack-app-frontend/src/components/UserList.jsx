import axios from 'axios';
import React, { useState, useEffect } from 'react'

export const UserList = () => {
  const [userListData, setUserListData] = useState(null);

  const fetchUserListData = async () => {
    const userListResp = await axios.get("/getUsers")
    .catch((error) => {
      console.log(error);
    })
    if(userListResp.data.allUsers.length>0){
      setUserListData(userListResp.data.allUsers);
    }
  }

  useEffect(() => {
    fetchUserListData();
  }, [])
  
  return (
    <div className='w-full lg:w-4/5 mx-auto'>
      <div className="container p-2 mx-auto sm:p-4 text-white">
        <div className="flex flex-col text-center w-full mb-6">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold title-font underline underline-offset-4">All Users</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-xs text-left whitespace-nowrap">
            {/* UserList Header */}
            {userListData?(
              <thead>
                <tr className="bg-white text-cyan-300 text-sm md:text-lg">
                  <th className="py-3 px-1 text-center hidden md:table-cell">
                    <font style={{verticalAlign: "inherit"}}>
                      <font style={{verticalAlign: "inherit"}}>Sr. No.</font>
                    </font>
                  </th>
                  <th className="py-3 px-1 text-center">
                    <font style={{verticalAlign: "inherit"}}>
                      <font style={{verticalAlign: "inherit"}}>Name</font>
                    </font>
                  </th>
                  <th className="py-3 px-1 text-center">
                    <font style={{verticalAlign: "inherit"}}>
                      <font style={{verticalAlign: "inherit"}}>Email</font>
                    </font>
                  </th>
                  <th className="py-3 px-1 text-center">
                      <font style={{verticalAlign: "inherit"}}>
                        <font style={{verticalAlign: "inherit"}}>Edit</font>
                      </font>
                  </th>
                  <th className="py-3 px-1 text-center">
                      <font style={{verticalAlign: "inherit"}}>
                        <font style={{verticalAlign: "inherit"}}>Delete</font>
                      </font>
                  </th>
                </tr>
              </thead>
            ):(
              <thead className='bg-white text-cyan-300 text-sm md:text-lg text-center p-2 rounded'>
                <tr><td>No User exists. Please try adding one by filling above form.</td></tr>
              </thead>
            )}
            {/* User Items are shown if userListData is not empty*/}
            {userListData?(
              userListData.map((user,index) => (
                <tbody className="border-b bg-cyan-300 border-white text-xs md:text-base" key={user._id}>
                  <tr>
                    <td className="px-2 font-medium text-white text-center hidden md:table-cell">
                      <font style={{verticalAlign: "inherit"}}>
                        <font style={{verticalAlign: "inherit"}}>{index+1}</font>
                      </font>
                    </td>
                    <td className="px-2 py-2 text-center">
                      <p className='whitespace-normal'>
                        <font style={{verticalAlign: "inherit"}}>
                          <font style={{verticalAlign: "inherit"}}>{user.name}</font>
                        </font>
                      </p>
                    </td>
                    <td className="px-2 py-2 text-center">
                      <span>
                        <font style={{verticalAlign: "inherit"}}>
                          <font style={{verticalAlign: "inherit"}}>{user.email}</font>
                        </font>
                      </span>
                    </td>
                    <td className="px-2 py-2">
                      <div className="p-2 w-full">
                        <button type='button' className="flex mx-auto bg-white text-cyan-300 border-2 py-2 px-4 md:px-8 focus:outline-none hover:bg-cyan-300 hover:border-white hover:text-white rounded text-xs md:text-base">Edit</button>
                      </div>
                    </td>
                    <td className="px-2 py-2">
                      <div className="p-2 w-full">
                        <button type='button' className="flex mx-auto bg-white text-cyan-300 border-2 py-2 px-4 md:px-8 focus:outline-none hover:bg-cyan-300 hover:border-white hover:text-white rounded text-xs md:text-base">Delete</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))
            ):(
              <tbody></tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  )
}

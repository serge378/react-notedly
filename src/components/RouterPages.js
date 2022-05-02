import React from "react";
import { Routes, Route } from "react-router-dom";

import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import MyNotes from "../pages/MyNotes";
import NoMatch from "../pages/NoMatch";
import NotePage from "../pages/NotePage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import NewNote from "../pages/NewNote";
import PrivateRoute from "./PrivateRoute";
import EditNote from "../pages/EditNote";

function RouterPages() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route
        path="mynotes"
        element={
          <PrivateRoute>
            <MyNotes />
          </PrivateRoute>
        }
      />
      <Route
        path="favorites"
        element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route path="note/:noteId" element={<NotePage />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="*" element={<NoMatch />} />
      <Route
        path="newnote"
        element={
          <PrivateRoute>
            <NewNote />
          </PrivateRoute>
        }
      />
      <Route
        path="editnote/:noteId"
        element={
          <PrivateRoute>
            <EditNote />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default RouterPages;

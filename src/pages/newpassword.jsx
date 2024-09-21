'use client'
import React,{useState} from 'react'
import SEO from "../common/seo";
import NewPassword from "../components/new-password";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"new password"} />
      <NewPassword />
    </Wrapper>
  );
};

export default index;
import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import authHeader from "../../services/auth-header";
import { useEffect } from "react";
const Search = () => {
  const { key } = useParams();
  const [resultTag, setResultTag] = useState();
  const [resultPeople, setResultPeople] = useState();
  const [resultName, setResultName] = useState();
  const [showvalue, setShowValue] = useState(0);

  const [skip, setskip] = useState(3);
  const [skip1, setskip1] = useState(3);
  const [skip2, setskip2] = useState(3);

  const getsearch = async () => {
    try {
      // console.log(skip);
      await axios
        .get("http://localhost:5000/api/search/all" + key, {
          headers: authHeader(),
        })
        .then(
          (res) => {
            setResultTag();
            setResultName();
            setResultPeople();
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
    } catch (e) {
      console.log(e);
    }
  };
  const getpeople = async () => {
    try {
      // console.log(skip);
      await axios
        .get(
          "http://localhost:5000/api/search/people" + key,
          {
            headers: authHeader(),
          },
          { skip: skip }
        )
        .then(
          (res) => {
            setResultPeople();
            setskip(skip + 5);
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
    } catch (e) {
      console.log(e);
    }
  };
  const gettags = async () => {
    try {
      // console.log(skip);
      await axios
        .get(
          "http://localhost:5000/api/search/tags" + key,
          {
            headers: authHeader(),
          },
          { skip: skip1 }
        )
        .then(
          (res) => {
            setResultTag();
            setskip1(skip1 + 5);
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
    } catch (e) {
      console.log(e);
    }
  };
  const getideas = async () => {
    try {
      // console.log(skip);
      await axios
        .get(
          "http://localhost:5000/api/search/title" + key,
          {
            headers: authHeader(),
          },
          { skip: skip2 }
        )
        .then(
          (res) => {
            setResultName();
            setskip2(skip2 + 5);
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getsearch();
  }, []);

  return (
    <div className="container">
      <div className="row mt-12">
        <div className="offset-lg-2 col-lg-1 text-white">
          <div className="row" className={showvalue === 0 ? "active" : null}>
            All
          </div>
          <div className="row" className={showvalue === 1 ? "active" : null}>
            Idea Title
          </div>
          <div className="row" className={showvalue === 2 ? "active" : null}>
            Idea Tag
          </div>
          <div className="row" className={showvalue === 3 ? "active" : null}>
            People
          </div>
        </div>
        {showvalue === 0 && <div className="offset-lg-1 col-lg-6">ALL</div>}
        {showvalue === 1 && (
          <div className="offset-lg-1 col-lg-6">IDEA TITLE</div>
        )}
        {showvalue === 2 && (
          <div className="offset-lg-1 col-lg-6">IDEA TAG</div>
        )}
        {showvalue === 3 && <div className="offset-lg-1 col-lg-6">PEOPLE</div>}
      </div>
    </div>
  );
};

export default Search;

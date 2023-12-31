import axios from "axios";
var host = import.meta.env.VITE_SERVER_HOST
import createUser from "../Store/user.jsx"
import jwt_decode from "jwt-decode";

const { user, setUser } = createUser;

class VoxServices {


  ///////////////////////////////////////////////////////////////////////
  //                Session Handler                                    //
  ///////////////////////////////////////////////////////////////////////

  sessionHandler(loginParams) {

    // Handles the login, receiving the user and password
    return axios({
      method: "post",
      url: host + "/v1/auth/signin",
      data: loginParams,
      headers: {'Content-Type': 'application/json'}
    })
      .then((response) => {
        if (response.data.token) {
          window.localStorage.setItem('token', response.data.token)
          setUser(jwt_decode(response.data.token));
          return true;
        }
        return false;
      })
      .catch(() => {
        return false;
      });
  }


  registerHandler(registerParams) {
    // Handles the register, receiving the user and company
    return axios({
      method: "post",
      url: host + "/v1/auth/signup",
      data: registerParams,
      headers: {'Content-Type': 'application/json'}
    })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }

  ///////////////////////////////////////////////////////////////////////
  //                Admin Panel Handler                                //
  ///////////////////////////////////////////////////////////////////////

  getPanelUsersApproval() {
    return axios({
      method: "get",
      url: host + "/v1/approval/getusers",
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then((users) => {
        return users;
      })
      .catch(() => {
        return false;
      });
  }

  approveUser(data) {
    return axios({
      method: "post",
      url: host + "/v1/approval/userapproval",
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }
  createCompanyHandler(data) {
    return axios({
      method: "post",
      url: host + "/v1/approval/createCompany",
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }
  
  getPanelCompanies() {
    return axios({
      method: "get",
      url: host + "/v1/approval/getcompanies",
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then((companies) => {
        return companies;
      })
      .catch(() => {
        return false;
      });
  }
    
  getPanelUsers() {
    return axios({
      method: "get",
      url: host + "/v1/approval/getuserlist",
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then((users) => {
        return users;
      })
      .catch(() => {
        return false;
      });
  }
  addUserCompany(data) {
    return axios({
      method: "post",
      url: host + "/v1/approval/addusercompany",
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }

  ///////////////////////////////////////////////////////////////////////
  //                Web resources Handler                              //
  ///////////////////////////////////////////////////////////////////////


  addWebResources(data) {
    return axios({
      method: "post",
      url: host + "/v1/webresources/add",
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }
  
  addWebSubResources(data) {
    return axios({
      method: "post",
      url: host + "/v1/webresources/add-subdomain",
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }
  
  getWebResources(company_id) {
    return axios({
      method: "get",
      url: host + "/v1/webresources/" + company_id,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then((resources) => {
        return resources;
      })
      .catch(() => {
        return false;
      });
  }

  ///////////////////////////////////////////////////////////////////////
  //                Mobile resources Handler                           //
  ///////////////////////////////////////////////////////////////////////

  
  addMobileResources(data) {
    return axios({
      method: "post",
      url: host + "/v1/mobileresources/add",
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }
  
  getMobileResources(company_id) {
    return axios({
      method: "get",
      url: host + "/v1/mobileresources/" + company_id,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then((resources) => {
        return resources;
      })
      .catch(() => {
        return false;
      });
  }

  ///////////////////////////////////////////////////////////////////////
  //                Internal network Handler                           //
  ///////////////////////////////////////////////////////////////////////

  addAccessPoint(data) {
    return axios({
      method: "post",
      url: host + "/v1/internalnetworks/add-resource",
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }

  addNetworkDevice(data) {
    return axios({
      method: "post",
      url: host + "/v1/internalnetworks/add-subresource",
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }
  
  getInternalNetworks(company_id) {
    return axios({
      method: "get",
      url: host + "/v1/internalnetworks/" + company_id,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then((resources) => {
        return resources;
      })
      .catch(() => {
        return false;
      });
  }
  
  ///////////////////////////////////////////////////////////////////////
  //            Repository resources Handler                           //
  ///////////////////////////////////////////////////////////////////////

  
  addRepositoryResources(data) {
    return axios({
      method: "post",
      url: host + "/v1/repositoryresources/add",
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }
  
  getRepositoryResources(company_id) {
    return axios({
      method: "get",
      url: host + "/v1/repositoryresources/" + company_id,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then((resources) => {
        return resources;
      })
      .catch(() => {
        return false;
      });
  }
    
  ///////////////////////////////////////////////////////////////////////
  //            Social resources Handler                               //
  ///////////////////////////////////////////////////////////////////////

  
  addSocialResources(data) {
    return axios({
      method: "post",
      url: host + "/v1/socialresources/add",
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }
  
  getSocialResources(company_id) {
    return axios({
      method: "get",
      url: host + "/v1/socialresources/" + company_id,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then((resources) => {
        return resources;
      })
      .catch(() => {
        return false;
      });
  }
    
  ///////////////////////////////////////////////////////////////////////
  //            Vulnerability  resources Handler                       //
  ///////////////////////////////////////////////////////////////////////

  
  addVulnerabilityResources(data) {
    return axios({
      method: "post",
      url: host + "/v1/issues/add",
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }

  getVulnerabilityResources(company_id) {
    return axios({
      method: "get",
      url: host + "/v1/issues/" + company_id,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then((resources) => {
        return resources;
      })
      .catch(() => {
        return false;
      });
  }
  
  getVulnerabilityById(id) {
    return axios({
      method: "get",
      url: host + "/v1/issue/" + id,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then((resource) => {
        return resource;
      })
      .catch(() => {
        return false;
      });
  }

  updateVulnerabilityResources(data) {
    return axios({
      method: "post",
      url: host + "/v1/issue/update",
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
      }
    })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }
  
}

const service = new VoxServices();
export default service;

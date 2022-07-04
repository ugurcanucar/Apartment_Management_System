using ApartmentManagementSystem.Entity.Base;
using ApartmentManagementSystem.Entity.Dto;
using ApartmentManagementSystem.Entity.Models;
using ApartmentManagementSystem.Entity.Statics;
using ApartmentManagementSystem.Interface;
using ApartmentManagementSystem.WebApi.Base;
using ApartmentManagementSystem.WebApi.Helper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace ApartmentManagementSystem.WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ApiBaseController<IUserService, User, DtoUser>
    {
        private readonly IUserService userService;
        public UserController(IUserService userService) : base(userService)
        {
            this.userService = userService;
        }

        [RoleTypeFilter(StaticStrings.Admin)] 
        [HttpGet]
        public IResponse<DtoUser> GetUser(int userId)
        {
            try
            {
                return userService.Find(userId);

            }
            catch (System.Exception ex)
            {
                return new Response<DtoUser>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }

        }


        [RoleTypeFilter(StaticStrings.Admin)] 
        [HttpPost]
        public IResponse<DtoUser> Add(DtoUser model)
        {
            try
            {
                return userService.Add(model);
            }
            catch (System.Exception ex)
            {
                return new Response<DtoUser>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }
        }

        [HttpPost]
        [AllowAnonymous]
        public IResponse<DtoUserToken> Login(DtoLogin login)
        {
            try
            {
                return userService.Login(login);
            }
            catch (System.Exception ex)
            {

                return new Response<DtoUserToken>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }
        }


        [RoleTypeFilter(StaticStrings.Admin)]
        [HttpPut]
        public IResponse<DtoUser> Update(DtoUser model)
        {
            try
            {
                return userService.Update(model);
            }
            catch (System.Exception ex)
            {
                return new Response<DtoUser>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }
        }


        [RoleTypeFilter(StaticStrings.Admin)]
        [HttpDelete]
        public IResponse<bool> Delete(int id)
        {
            try
            {
                return userService.Delete(id);
            }
            catch (System.Exception ex)
            {
                return new Response<bool>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = false
                };
            }
        }

        [RoleTypeFilter(StaticStrings.Admin)]
        [HttpGet]
        public IResponse<List<DtoUser>> GetUsers()
        {
            try
            {
                return userService.GetAll();

            }
            catch (System.Exception ex)
            {
                return new Response<List<DtoUser>>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }

        }

    }
}

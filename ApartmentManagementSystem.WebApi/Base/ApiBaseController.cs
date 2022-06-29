﻿using ApartmentManagementSystem.Entity.Base;
using ApartmentManagementSystem.Interface;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ApartmentManagementSystem.WebApi.Base
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize(AuthenticationSchemes =JwtBearerDefaults.AuthenticationScheme)]
    public class ApiBaseController<TService,T,TDto> : ControllerBase where TService : IGenericService<T,TDto> where T:EntityBase where TDto:DtoBase
    {
        private readonly TService service;

        public ApiBaseController(TService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IResponse<List<TDto>> GetAll()
        {
            try
            {
                return service.GetAll();
            }
            catch (System.Exception ex)
            {
                return new Response<List<TDto>>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }
        }

        [HttpGet]
        public IResponse<TDto> Find(int id)
        {
            try
            {
                return service.Find(id);
            }
            catch (System.Exception ex)
            {
                return new Response<TDto>
                {
                    StatusCode=StatusCodes.Status500InternalServerError,
                    Message=ex.Message,
                    Data=null
                };
            }
        }

        [HttpPost]
        public IResponse<TDto> Add(TDto model)
        {
            try
            {
                return service.Add(model);
            }
            catch (System.Exception ex)
            {
                return new Response<TDto>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }
        }
        [HttpPut]
        public IResponse<TDto> Update(TDto model)
        {
            try
            {
                return service.Update(model);
            }
            catch (System.Exception ex)
            {
                return new Response<TDto>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }
        }
        
        [HttpDelete]
        public IResponse<bool> Delete(int id)
        {
            try
            {
                return service.Delete(id);
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
        
    }
}

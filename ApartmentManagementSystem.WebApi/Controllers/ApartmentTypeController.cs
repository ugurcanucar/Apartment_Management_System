using ApartmentManagementSystem.Entity.Base;
using ApartmentManagementSystem.Entity.Dto;
using ApartmentManagementSystem.Entity.Models;
using ApartmentManagementSystem.Entity.Statics;
using ApartmentManagementSystem.Interface;
using ApartmentManagementSystem.WebApi.Base;
using ApartmentManagementSystem.WebApi.Helper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ApartmentManagementSystem.WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ApartmentTypeController :  ApiBaseController<IApartmentTypeService, ApartmentType, DtoApartmentType>
    {
        private readonly IApartmentTypeService service;
        public ApartmentTypeController(IApartmentTypeService service) : base(service)
        {
            this.service = service;
        }

        [RoleTypeFilter(StaticStrings.Admin)]
        [HttpGet]
        public IResponse<List<DtoApartmentType>> GetApartmentTypes()
        {
            try
            {
                return service.GetAll();

            }
            catch (System.Exception ex)
            {
                return new Response<List<DtoApartmentType>>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }
        }

            [RoleTypeFilter(StaticStrings.Admin)]
            [HttpPost]
            public IResponse<DtoApartmentType> AddApartmentType(DtoApartmentType model)
            {
                try
                {
                    return service.Add(model);

                }
                catch (System.Exception ex)
                {
                    return new Response<DtoApartmentType>
                    {
                        StatusCode = StatusCodes.Status500InternalServerError,
                        Message = ex.Message,
                        Data = null
                    };
                }

            }
        [RoleTypeFilter(StaticStrings.Admin)]
        [HttpPut]
        public IResponse<DtoApartmentType> UpdateApartmentType(DtoApartmentType model)
        {
            try
            {
                return service.Update(model);

            }
            catch (System.Exception ex)
            {
                return new Response<DtoApartmentType>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }

        }
        [RoleTypeFilter(StaticStrings.Admin)]
        [HttpDelete]
        public IResponse<bool> DeleteApartmentType(int id)
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

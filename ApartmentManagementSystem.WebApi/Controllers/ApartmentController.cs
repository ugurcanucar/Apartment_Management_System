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
    public class ApartmentController :  ApiBaseController<IApartmentService, Apartment, DtoApartment>
    {
        private readonly IApartmentService service;
        public ApartmentController(IApartmentService service) : base(service)
        {
            this.service = service;
        }

        [HttpPost]
        [RoleTypeFilter(StaticStrings.Admin)]
        public IResponse<DtoApartment> Add(DtoApartment model)
        {
            try
            {
                return service.Add(model);
            }
            catch (System.Exception ex)
            {
                return new Response<DtoApartment>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }
        }


        [RoleTypeFilter(StaticStrings.Admin)]
        [HttpPut]
        public IResponse<DtoApartment> Update(DtoApartment model)
        {
            try
            {
                return service.Update(model);
            }
            catch (System.Exception ex)
            {
                return new Response<DtoApartment>
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

        [RoleTypeFilter(StaticStrings.Admin)]
        [HttpGet]
        public IResponse<List<DtoApartment>> GetApartments()
        {
            try
            {
                return service.GetAll();

            }
            catch (System.Exception ex)
            {
                return new Response<List<DtoApartment>>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }

        }

    }
}

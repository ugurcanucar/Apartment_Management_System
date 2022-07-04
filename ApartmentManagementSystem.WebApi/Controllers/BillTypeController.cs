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
    public class BillTypeController : ApiBaseController<IBillTypeService, BillType, DtoBillType>
    {
        private readonly IBillTypeService service;
        public BillTypeController(IBillTypeService service) : base(service)
        {
            this.service = service;
        }

        [RoleTypeFilter(StaticStrings.Admin)]
        [HttpGet]
        public IResponse<List<DtoBillType>> GetBillTypes()
        {

            try
            {
                return service.GetAll();

            }
            catch (System.Exception ex)
            {
                return new Response<List<DtoBillType>>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }

        }
        [RoleTypeFilter(StaticStrings.Admin)]
        [HttpPut]
        public IResponse<DtoBillType> UpdateBillType(DtoBillType model)
        {

            try
            {
                return service.Update(model);

            }
            catch (System.Exception ex)
            {
                return new Response<DtoBillType>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }

        }
        [RoleTypeFilter(StaticStrings.Admin)]
        [HttpPost]
        public IResponse<DtoBillType> AddBillType(DtoBillType model)
        {

            try
            {
                return service.Add(model);

            }
            catch (System.Exception ex)
            {
                return new Response<DtoBillType>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }

        }
        [RoleTypeFilter(StaticStrings.Admin)]
        [HttpDelete]
        public IResponse<bool> DeleteBillType(int id)
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

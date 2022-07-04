using ApartmentManagementSystem.Entity.Base;
using ApartmentManagementSystem.Entity.Dto;
using ApartmentManagementSystem.Entity.Models;
using ApartmentManagementSystem.Entity.Statics;
using ApartmentManagementSystem.Interface;
using ApartmentManagementSystem.WebApi.Base;
using ApartmentManagementSystem.WebApi.Helper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace ApartmentManagementSystem.WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class BillController :  ApiBaseController<IBillService, Bill, DtoBill>
    {
        private readonly IBillService service;
        public BillController(IBillService service) : base(service)
        {
            this.service = service;
        }


        [RoleTypeFilter(StaticStrings.Admin)]
        [HttpGet]
        public IResponse<List<DtoBill>> GetBillsMonthly(DateTime date)
        {
            
            try
            {
                var month = date.Month;

                return service.GetAll(x => x.Date.Month== month&&x.IsDeleted==false);

            }
            catch (System.Exception ex)
            {
                return new Response<List<DtoBill>>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }

        }
         
        [HttpGet]
        public IResponse<List<DtoBill>> GetUserBillsMonthly(DateTime date,int userId)
        {

            try
            {
                var month = date.Month;

                return service.GetAll(x => x.Date.Month == month && x.IsDeleted == false && userId==x.UserId);

            }
            catch (System.Exception ex)
            {
                return new Response<List<DtoBill>>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }

        }


        [HttpGet]
        public IResponse<List<DtoBill>> GetUserBill(int userId)
        {

            try
            {  
                return service.GetAll(x => x.UserId==userId);

            }
            catch (System.Exception ex)
            {
                return new Response<List<DtoBill>>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }

        }


        [HttpGet]
        public IResponse<List<DtoBill>> GetUserPaidBill(int userId)
        {

            try
            {
                return service.GetAll(x => x.UserId == userId && x.PaidValue!=null);

            }
            catch (System.Exception ex)
            {
                return new Response<List<DtoBill>>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }

        }

        [RoleTypeFilter(StaticStrings.Admin)]
        [HttpGet]
        public IResponse<List<DtoBill>> GetBills()
        {

            try
            {
                return service.GetAll();

            }
            catch (System.Exception ex)
            {
                return new Response<List<DtoBill>>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }

        }

        [RoleTypeFilter(StaticStrings.Admin)]
        [HttpPost]
        public IResponse<DtoBill> AddBill(DtoBill model)
        {

            try
            {
                return service.Add(model);

            }
            catch (Exception ex)
            {
                return new Response<DtoBill>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }

        }

        [RoleTypeFilter(StaticStrings.Admin)]
        [HttpDelete]
        public IResponse<bool> DeleteBill(int id)
        {

            try
            {
                return service.Delete(id);

            }
            catch (Exception ex)
            {
                return new Response<bool>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = false
                };
            }

        }


         
        [HttpPut]
        public IResponse<DtoBill> UpdateBill(DtoBill model)
        {

            try
            {
                return service.Update(model);

            }
            catch (Exception ex)
            {
                return new Response<DtoBill>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }

        }






    }
}

using ApartmentManagementSystem.Entity.Dto;
using ApartmentManagementSystem.Entity.Models;
using ApartmentManagementSystem.Interface;
using ApartmentManagementSystem.WebApi.Base;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
    }
}

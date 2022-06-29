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
    public class BillController :  ApiBaseController<IBillService, Bill, DtoBill>
    {
        private readonly IBillService service;
        public BillController(IBillService service) : base(service)
        {
            this.service = service;
        }
    }
}

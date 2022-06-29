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
    public class ApartmentController :  ApiBaseController<IApartmentService, Apartment, DtoApartment>
    {
        private readonly IApartmentService service;
        public ApartmentController(IApartmentService service) : base(service)
        {
            this.service = service;
        }
    }
}

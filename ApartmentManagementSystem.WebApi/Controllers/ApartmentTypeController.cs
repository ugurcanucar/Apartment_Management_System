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
    public class ApartmentTypeController :  ApiBaseController<IApartmentTypeService, ApartmentType, DtoApartmentType>
    {
        private readonly IApartmentTypeService service;
        public ApartmentTypeController(IApartmentTypeService service) : base(service)
        {
            this.service = service;
        }
    }
}

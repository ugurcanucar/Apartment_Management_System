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
    public class AccountTypesController : ApiBaseController<IAccountTypeService, AccountType, DtoAccountType>
    {
        private readonly IAccountTypeService service;
        public AccountTypesController(IAccountTypeService service) : base(service)
        {
            this.service = service;
        }
    }
}

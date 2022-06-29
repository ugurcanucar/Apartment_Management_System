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
    public class BlockController : ApiBaseController<IBlockService, Block, DtoBlock>
    {
        private readonly IBlockService service;
        public BlockController(IBlockService service) : base(service)
        {
            this.service = service;
        }
    }
}

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
    public class BlockController : ApiBaseController<IBlockService, Block, DtoBlock>
    {
        private readonly IBlockService service;
        public BlockController(IBlockService service) : base(service)
        {
            this.service = service;
        }

        [RoleTypeFilter(StaticStrings.Admin)]
        [HttpGet]
        public IResponse<List<DtoBlock>>GetBlocks()
        {
            try
            {
                return service.GetAll(); 
            }
            catch (System.Exception ex)
            {
                return new Response<List<DtoBlock>>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }

        }
        [RoleTypeFilter(StaticStrings.Admin)]
        [HttpPut]
        public IResponse<DtoBlock> UpdateBlock(DtoBlock model)
        {

            try
            {
                return service.Update(model);

            }
            catch (System.Exception ex)
            {
                return new Response<DtoBlock>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }

        }
        [RoleTypeFilter(StaticStrings.Admin)]
        [HttpPost]
        public IResponse<DtoBlock> AddBlock(DtoBlock model)
        {

            try
            {
                return service.Add(model);

            }
            catch (System.Exception ex)
            {
                return new Response<DtoBlock>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }

        }
        [RoleTypeFilter(StaticStrings.Admin)]
        [HttpDelete]
        public IResponse<bool> DeleteBlock(int id)
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

using ApartmentManagementSystem.Entity.Base;
using ApartmentManagementSystem.Entity.Dto;
using ApartmentManagementSystem.Entity.Models;
using ApartmentManagementSystem.Interface;
using ApartmentManagementSystem.WebApi.Base;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ApartmentManagementSystem.WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class MessageController : ApiBaseController<IMessageService, Message, DtoMessage>
    {
        private readonly IMessageService service;
        public MessageController(IMessageService service) : base(service)
        {
            this.service = service;
        }

        [HttpGet()]
        public IResponse<List<DtoMessage>> GetMessagesByReceiverId(int receiverId)
        {
            try
            {
                return service.GetAll(x => x.ReceiverId == receiverId);

            }
            catch (System.Exception ex)
            {
                return new Response<List<DtoMessage>>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }

        }
    }
}

using ApartmentManagementSystem.Bll;
using ApartmentManagementSystem.Entity.Base;
using ApartmentManagementSystem.Entity.Dto;
using ApartmentManagementSystem.Entity.Models;
using ApartmentManagementSystem.Entity.Statics;
using ApartmentManagementSystem.Interface;
using ApartmentManagementSystem.WebApi.Base;
using ApartmentManagementSystem.WebApi.Helper;
using AutoMapper.Internal.Mappers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using static ApartmentManagementSystem.Entity.Statics.StaticStrings;

namespace ApartmentManagementSystem.WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class MessageController : ApiBaseController<IMessageService, Message, DtoMessage>
    {
        private readonly IMessageService service;
        private readonly IUserService userService;
        public MessageController(IMessageService service, IUserService userService) : base(service)
        {
            this.service = service;
            this.userService = userService;
        }


        [HttpPost]
        public IResponse<DtoMessage> SendMessage(DtoMessage message)
        {
            try
            {
                var user = userService.FindModel(message.UserId);
                var receiver = userService.FindModel(message.ReceiverId);

                if (user.AccountTypeId.ToString() != Admin && receiver.AccountTypeId.ToString() != Admin)
                {
                    return new Response<DtoMessage>
                    {
                        StatusCode = StatusCodes.Status500InternalServerError,
                        Message = "Sadece Yöneticiye Mesaj Gönderebilirsiniz.",
                        Data = null
                    };
                }
                return service.Add(message);






            }
            catch (System.Exception ex)
            {
                return new Response<DtoMessage>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }

        }

        [HttpPut]
        public IResponse<DtoMessage> UpdateMessage(DtoMessage model)
        {
            try
            {
                return service.Update(model);
            }
            catch (System.Exception ex)
            {
                return new Response<DtoMessage>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }
        }

        [HttpPut]
        public IResponse<DtoMessage> ReadMessage(DtoMessage model)
        {
            try
            {
                var message = service.FindModel(model.Id);
                message.IsRead = true;
                return service.Update(message); 

            }
            catch (System.Exception ex)
            {
                return new Response<DtoMessage>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = ex.Message,
                    Data = null
                };
            }

        }
            
        [HttpDelete]
        public IResponse<bool> DeleteMessage(int id)
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



        [RoleTypeFilter(Admin)]
        [HttpGet]
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

        [RoleTypeFilter(Admin)]
        [HttpGet]
        public IResponse<List<DtoMessage>> GetMessages()
        {
            try
            {
                return service.GetAll();

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

        [HttpGet]
        public IResponse<List<DtoMessage>> GetMessageByUser(int userId)
        {
            try
            {
                return service.GetAll(x => x.ReceiverId == userId&&x.IsDeleted==false);

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

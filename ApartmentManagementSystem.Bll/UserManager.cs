using ApartmentManagementSystem.Dal.Abstract;
using ApartmentManagementSystem.Entity.Base;
using ApartmentManagementSystem.Entity.Dto;
using ApartmentManagementSystem.Entity.Models;
using ApartmentManagementSystem.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace ApartmentManagementSystem.Bll
{
    public class UserManager : GenericManager<User, DtoUser>, IUserService
    {
        public readonly IUserRepository userRepository;
        private IConfiguration configuration;
        public UserManager(IServiceProvider service, IConfiguration configuration) :base(service)
        {
            userRepository=service.GetService<IUserRepository>();
            this.configuration=configuration;
        }

        public IResponse<IQueryable<DtoUser>> GetTotalUsers()
        {
            try
            {
                var list = userRepository.GetTotalUsers();
                var listDto = list.Select(x => ObjectMapper.Mapper.Map<DtoUser>(x));

                return new Response<IQueryable<DtoUser>>
                {
                    StatusCode = StatusCodes.Status200OK,
                    Message = "Success",
                    Data = listDto
                };
            }
            catch (Exception ex)
            {

                return new Response<IQueryable<DtoUser>>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = $"Error {ex.Message}",
                    Data = null
                };
            }
        }

        public IResponse<DtoUserToken> Login(DtoLogin login)
        {
            var user = userRepository.Login(ObjectMapper.Mapper.Map<User>(login));
            if (user!=null)
            {
                var dtoUser=ObjectMapper.Mapper.Map<DtoLoginUser>(user);

                var token = new TokenManager(configuration).CreateAccessToken(dtoUser);

                var userToken = new DtoUserToken()
                {
                    DtoLoginUser=dtoUser,
                    AccessToken=token
                };

                return new Response<DtoUserToken>()
                {
                    Message="Token Üretildi!",
                    StatusCode= StatusCodes.Status200OK,
                    Data = userToken
                };

            }
            else
            {
                return new Response<DtoUserToken>
                {
                    Message="Email veya paralo yanlış!",
                    StatusCode=StatusCodes.Status406NotAcceptable,
                    Data=null
                };
            }
        }
    }
}

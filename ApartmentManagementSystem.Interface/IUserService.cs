using ApartmentManagementSystem.Entity.Base;
using ApartmentManagementSystem.Entity.Dto;
using ApartmentManagementSystem.Entity.Models;
using System.Linq;

namespace ApartmentManagementSystem.Interface
{
    public interface IUserService:IGenericService<User,DtoUser>
    {
        IResponse<IQueryable<DtoUser>> GetTotalUsers();

        IResponse<DtoUserToken> Login(DtoLogin login);
    }
}

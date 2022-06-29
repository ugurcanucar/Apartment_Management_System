#nullable disable

using ApartmentManagementSystem.Entity.Base;

namespace ApartmentManagementSystem.Entity.Dto
{
    public  class DtoAccountType : DtoBase
    {
        public DtoAccountType()
        {
             
        }

        public int Id { get; set; }
        public string Name { get; set; }
         
    }
}

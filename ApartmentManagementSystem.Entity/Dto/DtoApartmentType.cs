using ApartmentManagementSystem.Entity.Base;

#nullable disable

namespace ApartmentManagementSystem.Entity.Dto
{
    public class DtoApartmentType : DtoBase
    {
        public DtoApartmentType()
        {
         }

        public int Id { get; set; }
        public string Name { get; set; }

     }
}

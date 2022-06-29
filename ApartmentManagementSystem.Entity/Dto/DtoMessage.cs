using ApartmentManagementSystem.Entity.Base;

 
namespace ApartmentManagementSystem.Entity.Dto
{
    public  class DtoMessage : DtoBase
    {
        public int Id { get; set; }
        public string MessageContent { get; set; }
        public int ReceiverId { get; set; }
        public int UserId { get; set; }
        public bool? IsRead { get; set; }
         
    }
}
